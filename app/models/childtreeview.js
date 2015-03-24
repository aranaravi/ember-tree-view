import DS from 'ember-data';

export default DS.Model.extend({	
    parentId : DS.attr(),
    treeview : DS.belongsTo('treeview')   
});
 