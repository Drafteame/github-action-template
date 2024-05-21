
export default class Action {
  constructor(action) {
    this.action = action
  }

  run() {
    console.log(`Perform ${action} action...`)
  }
}