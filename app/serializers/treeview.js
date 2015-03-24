import DS from "ember-data";

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin,{	
 	extractArray: function(store, type, payload) {
      	    return payload.map(function(json) {
      	      return this.extractSingle(store, type, json);
      	    }, this);
      	  },
      	 attrs: {
     		childTreeViews: {embedded: 'always'}
     	  }
});