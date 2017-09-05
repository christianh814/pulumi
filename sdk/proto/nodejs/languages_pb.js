/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.exportSymbol('proto.lumirpc.NewResourceRequest', null, global);
goog.exportSymbol('proto.lumirpc.NewResourceResponse', null, global);
goog.exportSymbol('proto.lumirpc.RunRequest', null, global);
goog.exportSymbol('proto.lumirpc.RunResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.RunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lumirpc.RunRequest.repeatedFields_, null);
};
goog.inherits(proto.lumirpc.RunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.RunRequest.displayName = 'proto.lumirpc.RunRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lumirpc.RunRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.RunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.RunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.RunRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.RunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pwd: jspb.Message.getFieldWithDefault(msg, 1, ""),
    program: jspb.Message.getFieldWithDefault(msg, 2, ""),
    argsList: jspb.Message.getField(msg, 3),
    configMap: (f = msg.getConfigMap()) ? f.toObject(includeInstance, undefined) : [],
    dryrun: jspb.Message.getFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.RunRequest}
 */
proto.lumirpc.RunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.RunRequest;
  return proto.lumirpc.RunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.RunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.RunRequest}
 */
proto.lumirpc.RunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPwd(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgram(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 4:
      var value = msg.getConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDryrun(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.RunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.RunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.RunRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.RunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPwd();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProgram();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getDryrun();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string pwd = 1;
 * @return {string}
 */
proto.lumirpc.RunRequest.prototype.getPwd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.lumirpc.RunRequest.prototype.setPwd = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string program = 2;
 * @return {string}
 */
proto.lumirpc.RunRequest.prototype.getProgram = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.lumirpc.RunRequest.prototype.setProgram = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated string args = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.lumirpc.RunRequest.prototype.getArgsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<string>} value */
proto.lumirpc.RunRequest.prototype.setArgsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.lumirpc.RunRequest.prototype.addArgs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.lumirpc.RunRequest.prototype.clearArgsList = function() {
  this.setArgsList([]);
};


/**
 * map<string, string> config = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.lumirpc.RunRequest.prototype.getConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


proto.lumirpc.RunRequest.prototype.clearConfigMap = function() {
  this.getConfigMap().clear();
};


/**
 * optional bool dryRun = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lumirpc.RunRequest.prototype.getDryrun = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.lumirpc.RunRequest.prototype.setDryrun = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.RunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.RunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.RunResponse.displayName = 'proto.lumirpc.RunResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.RunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.RunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.RunResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.RunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.RunResponse}
 */
proto.lumirpc.RunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.RunResponse;
  return proto.lumirpc.RunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.RunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.RunResponse}
 */
proto.lumirpc.RunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.RunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.RunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.RunResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.RunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.lumirpc.RunResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.lumirpc.RunResponse.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.NewResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.NewResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.NewResourceRequest.displayName = 'proto.lumirpc.NewResourceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.NewResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.NewResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.NewResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.NewResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    object: (f = msg.getObject()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.NewResourceRequest}
 */
proto.lumirpc.NewResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.NewResourceRequest;
  return proto.lumirpc.NewResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.NewResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.NewResourceRequest}
 */
proto.lumirpc.NewResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.NewResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.NewResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.NewResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.NewResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.lumirpc.NewResourceRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.lumirpc.NewResourceRequest.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.lumirpc.NewResourceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.lumirpc.NewResourceRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional google.protobuf.Struct object = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lumirpc.NewResourceRequest.prototype.getObject = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.lumirpc.NewResourceRequest.prototype.setObject = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.lumirpc.NewResourceRequest.prototype.clearObject = function() {
  this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.lumirpc.NewResourceRequest.prototype.hasObject = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lumirpc.NewResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lumirpc.NewResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lumirpc.NewResourceResponse.displayName = 'proto.lumirpc.NewResourceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lumirpc.NewResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lumirpc.NewResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lumirpc.NewResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lumirpc.NewResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    urn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    object: (f = msg.getObject()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    stable: jspb.Message.getFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lumirpc.NewResourceResponse}
 */
proto.lumirpc.NewResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lumirpc.NewResourceResponse;
  return proto.lumirpc.NewResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lumirpc.NewResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lumirpc.NewResourceResponse}
 */
proto.lumirpc.NewResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrn(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lumirpc.NewResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lumirpc.NewResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lumirpc.NewResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lumirpc.NewResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getStable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.lumirpc.NewResourceResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.lumirpc.NewResourceResponse.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string urn = 2;
 * @return {string}
 */
proto.lumirpc.NewResourceResponse.prototype.getUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.lumirpc.NewResourceResponse.prototype.setUrn = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional google.protobuf.Struct object = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.lumirpc.NewResourceResponse.prototype.getObject = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.lumirpc.NewResourceResponse.prototype.setObject = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.lumirpc.NewResourceResponse.prototype.clearObject = function() {
  this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.lumirpc.NewResourceResponse.prototype.hasObject = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool stable = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lumirpc.NewResourceResponse.prototype.getStable = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.lumirpc.NewResourceResponse.prototype.setStable = function(value) {
  jspb.Message.setField(this, 4, value);
};


goog.object.extend(exports, proto.lumirpc);
