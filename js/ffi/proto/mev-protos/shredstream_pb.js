// source: mev-protos/shredstream.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var mev$protos_shared_pb = require('../mev-protos/shared_pb.js');
goog.object.extend(proto, mev$protos_shared_pb);
goog.exportSymbol('proto.shredstream.Heartbeat', null, global);
goog.exportSymbol('proto.shredstream.HeartbeatResponse', null, global);
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
proto.shredstream.Heartbeat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.shredstream.Heartbeat.repeatedFields_, null);
};
goog.inherits(proto.shredstream.Heartbeat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shredstream.Heartbeat.displayName = 'proto.shredstream.Heartbeat';
}
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
proto.shredstream.HeartbeatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shredstream.HeartbeatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shredstream.HeartbeatResponse.displayName = 'proto.shredstream.HeartbeatResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.shredstream.Heartbeat.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shredstream.Heartbeat.prototype.toObject = function(opt_includeInstance) {
  return proto.shredstream.Heartbeat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shredstream.Heartbeat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shredstream.Heartbeat.toObject = function(includeInstance, msg) {
  var f, obj = {
    socket: (f = msg.getSocket()) && mev$protos_shared_pb.Socket.toObject(includeInstance, f),
    regionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.shredstream.Heartbeat}
 */
proto.shredstream.Heartbeat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shredstream.Heartbeat;
  return proto.shredstream.Heartbeat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shredstream.Heartbeat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shredstream.Heartbeat}
 */
proto.shredstream.Heartbeat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new mev$protos_shared_pb.Socket;
      reader.readMessage(value,mev$protos_shared_pb.Socket.deserializeBinaryFromReader);
      msg.setSocket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRegions(value);
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
proto.shredstream.Heartbeat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shredstream.Heartbeat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shredstream.Heartbeat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shredstream.Heartbeat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSocket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      mev$protos_shared_pb.Socket.serializeBinaryToWriter
    );
  }
  f = message.getRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional shared.Socket socket = 1;
 * @return {?proto.shared.Socket}
 */
proto.shredstream.Heartbeat.prototype.getSocket = function() {
  return /** @type{?proto.shared.Socket} */ (
    jspb.Message.getWrapperField(this, mev$protos_shared_pb.Socket, 1));
};


/**
 * @param {?proto.shared.Socket|undefined} value
 * @return {!proto.shredstream.Heartbeat} returns this
*/
proto.shredstream.Heartbeat.prototype.setSocket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shredstream.Heartbeat} returns this
 */
proto.shredstream.Heartbeat.prototype.clearSocket = function() {
  return this.setSocket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shredstream.Heartbeat.prototype.hasSocket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string regions = 2;
 * @return {!Array<string>}
 */
proto.shredstream.Heartbeat.prototype.getRegionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.shredstream.Heartbeat} returns this
 */
proto.shredstream.Heartbeat.prototype.setRegionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.shredstream.Heartbeat} returns this
 */
proto.shredstream.Heartbeat.prototype.addRegions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.shredstream.Heartbeat} returns this
 */
proto.shredstream.Heartbeat.prototype.clearRegionsList = function() {
  return this.setRegionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shredstream.HeartbeatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.shredstream.HeartbeatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shredstream.HeartbeatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shredstream.HeartbeatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ttlMs: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.shredstream.HeartbeatResponse}
 */
proto.shredstream.HeartbeatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shredstream.HeartbeatResponse;
  return proto.shredstream.HeartbeatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shredstream.HeartbeatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shredstream.HeartbeatResponse}
 */
proto.shredstream.HeartbeatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTtlMs(value);
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
proto.shredstream.HeartbeatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shredstream.HeartbeatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shredstream.HeartbeatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shredstream.HeartbeatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTtlMs();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 ttl_ms = 1;
 * @return {number}
 */
proto.shredstream.HeartbeatResponse.prototype.getTtlMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.shredstream.HeartbeatResponse} returns this
 */
proto.shredstream.HeartbeatResponse.prototype.setTtlMs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.shredstream);