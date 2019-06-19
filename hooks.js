module.exports = {
	allowPictureChanges: function(data, callback){
		data.fields.push("picture");
		data.fields.push("uploadedpicture");
		callback(null, data);
	}
}
