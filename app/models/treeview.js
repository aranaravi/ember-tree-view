import DS from 'ember-data';

var tenant = DS.Model.extend({
	name: DS.attr(),
	childTenants: DS.hasMany('childtenant')
});

tenant.reopenClass({
    FIXTURES:[{"childTenants":[{"id":1,"parentId":2,"tenant":{"childTenants":[{"id":5,"parentId":1,"tenant":{"childTenants":[],"id":5,"name":"Sub Sub Tenant3"}},{"id":4,"parentId":1,"tenant":{"childTenants":[],"id":4,"name":"Sub Sub Tenant2"}},{"id":3,"parentId":1,"tenant":{"childTenants":[],"id":3,"name":"Sub Sub Tenant1"}}],"id":1,"name":"Sub Tenant"}}],"id":2,"name":"Aujas"}]
});

export default tenant;

 
