import { makeAutoObservable } from 'mobx'

class globStore {

  constructor() {
    makeAutoObservable(this)
  }

  count = 0

  add = () => {
    this.count += 1
  }

  los = () => {
    this.count -= 1
  }

  get compGet() {
    return this.count * 2
  }
}

export default new globStore()