import DS from "ember-data";

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin,{

      	 attrs: {
     		treeview: {embedded: 'always'}
     	  }
});