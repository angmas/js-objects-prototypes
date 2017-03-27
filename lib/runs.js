'use strict'

const User = function (name, email) {
  this.name = name
  this.email = email
  this.runs = []
}


const Run = function (date, distance, timeTaken) {
  this.date = date
  this.distance = distance
  this.timeTaken = timeTaken
}


User.prototype.totalDistance = function () {
  let totalDistance = 0
  for (let i=0;i<this.runs.length;i++) {
    totalDistance += this.runs[i].distance
  }
  return totalDistance
}

// longest runs
User.prototype.longestRun = function () {
  let longestRun = this.runs[0].distance
  for (let i=0; i<this.runs.length;i++) {
    if (this.runs[i] > longestRun) {
      longestRun = this.runs[i].distance
    }
    return longestRun
  }
}

// averageSpeed
User.prototype.averageSpeed = function () {
  return this.totalDistance() / this.runs.length
}

module.exports = {
  Run,
  User
}

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
