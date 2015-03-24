import DS from 'ember-data';

export default DS.Model.extend({	
	name: DS.attr(),	
	childTreeViews: DS.hasMany('childtreeview')
});
 