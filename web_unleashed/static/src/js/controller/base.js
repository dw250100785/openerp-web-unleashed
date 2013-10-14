/*
 * Main Controller, instanciated by OpenERP
 */
openerp.unleashed.module('web_unleashed',function(base, _, Backbone){
 
    var Controller = Backbone.Marionette.Controller,
        _super = Controller.prototype;

    var BaseController = Controller.extend({
        
        initialize: function(options){
            this.type = options.type || 'views';
            this.name = options.name || null;
            this.template = options.template;
            this.display_name = options.display_name || '';
        
            this.options = options;
            
            
            if(!this.name){
                throw new Error(module.name + ': controller name is not defined');
            }
            
        },
        
        start: function(){
            var viewOptions = {};
            if(this.options.collection){
                viewOptions.collection = this.collection = new this.options.collection();
            }
            if(this.model){
                viewOptions.model = this.model = new this.options.model();
            }
            
            this.view = new this.options.view(viewOptions);
            this.region = new Marionette.Region({
                el: this.options.region
            });
        },
        
        render: function(data){
            
            // when the TodoView has been rendered, inject the view in the region
            this.region.show(this.view);
            
            // only fetch the collection after the view rendering, 
            // to avoid issue when model are injected  as item view in a not rendered component view
            if(this.collection){
                this.collection.fetch();    
            }
            if(this.model){
                this.model.fetch();    
            }
        },
        
        search: function(domain, context){
            // apply the search from the OpenERP search widget
            if(this.collection){
                this.collection.fetch({
                    filter: domain,
                    context: context
                });
            }
            if(this.model){
                this.model.fetch({
                    filter: domain,
                    context: context
                });
            }
        },
        
        close: function() {
            // region.close() will automatically remove all DOM elements and unbind all event listeners
            // avoiding memory leaks
            if(this.region){
                this.region.close();
            }
        },
        
        // registering methods
        register: function(instance, module){
            if(typeof instance.web[this.type] != 'object' && typeof instance.web[this.type].add != 'function'){
                throw new Error(module.name + ': type ' + this.type + ' of controller ' + this.name + ' is not valid');
            }
            
            instance[module.name] = instance[module.name] ? instance[module.name] : {};
            instance[module.name][this.name] = this.openERPView(instance);
            instance.web[this.type].add(this.name, 'instance.' + module.name + '.' + this.name);
        },
        
        /*
         * proxify an OpenERP view 
         */
        openERPView: function(instance){
            var self = this;
            var proxy = function(name){
                    return function(){
                        self[name].apply(self, arguments);
                        return this._super(arguments);
                    }    
                };
 
            return instance.web.View.extend({
    
                template: this.template,
        
                // select an OpenERP view type, required but has no effect because web unleashed is abstracted from all 
                // the OpenERP web architecture... 
                view_type: 'tree',
                
                start: proxy('start'),
        
                on_search: proxy('search'),
                
                view_loading: proxy('render'),
                
                destroy: proxy('close')        
            });
        }
    });

    base.utils('BaseController', BaseController);
});