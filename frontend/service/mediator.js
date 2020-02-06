const events = {};

class Mediator {

  /**
   * publish event/message
   * @param {string} event name
   * @returns {object} mediator
   * @param {string|object} arg accepts one argument to pass to callback
   * @returns {Mediator}
   */
  publish(event, arg) {
    if (!events[event] || !events[event].length) return this;

    events[event].forEach(function(fn) {
      fn(arg);
    });
    return this;
  }

  /**
   * subscribe to event
   * @param {string} event event name
   * @param {function} fn function to execute on event publish
   * @returns {Mediator}
   */
  subscribe(event, fn) {
    if (event && typeof fn === 'function') {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(fn);
    }
    return this;
  }

  /**
   * unsubscribe from event
   * @param {event} event event name
   * @returns {Mediator}
   */
  unsubscribe(event) {
    events[event] = [];
    return this;
  }
}

export default Mediator;