/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { initialize, Event } = require('@harnessio/ff-javascript-client-sdk');

const prodKey = 'xxxxxxxx--xxxx--xxxx-xxxx-xxxxxxxxxxxx'

const cf = initialize(prodKey, {
    identifier: "harness",      // Target identifier
    name: "harness",                  // Optional target name
    attributes: {                      // Optional target attributes
      email: 'sample@sample.com'
    },
  });

/**
* Check the value of a flag
*
* flagCheckBody FlagCheckBody 
* returns FlagCheckResponse
* */
const getFlagValue = ({ flagCheckBody }) => new Promise(
  async (resolve, reject) => {
    try {
    const cf = initialize(prodKey, {
        identifier: "harness3",      // Target identifier
        name: "harness3",                  // Optional target name
        attributes: {                      // Optional target attributes
          email: 'sample@sample.com'
        },
      });
      resolve(Service.successResponse({
        flagCheckBody,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Check the system is up
*
* returns PongResponse
* */
const ping = () => new Promise(
  async (resolve, reject) => {
    try {
    const cf = initialize(prodKey, {
        identifier: "harness3",      // Target identifier
        name: "harness3",                  // Optional target name
        attributes: {                      // Optional target attributes
          email: 'sample@sample.com'
        },
      });
      resolve(Service.successResponse({
        pong: true
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getFlagValue,
  ping,
};
