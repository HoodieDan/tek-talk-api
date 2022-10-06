const { Schema, Types, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bio: { type: String, default: null },
  verified: {
    type: Boolean,
    default: false,
  },
  followers: [{ type: String, required: true, default: [] }],
  following: [{ type: String, required: true, default: [] }],
  token: String,
  tokenExpiration: Date,
  displayUrl: { type: String, default: null },
  dsiplayLocal: { type: String, default: null },
  displayId: { type: String, default: null },
  backdropUrl: { type: String, default: null },
  backdropLocal: { type: String, default: null },
  backdropId: { type: String, default: null },
});

userSchema.methods.addToFollowers = function (id) {
  if (!this.followers.includes(id)) {
    this.followers.push(id);
  }
  return this.save();
};

userSchema.methods.addToFollowing = function (id) {
  console.log(id);
  if (!this.following.includes(id)) {
    this.following.push(id);
  }

  return this.save();
};

module.exports = mongoose.model("User", userSchema);
