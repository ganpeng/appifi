import path from 'path'

class Node {

  constructor(ctx) {
    this.ctx = ctx
    this.parent = null
  }

  root() {
    let node = this   
    while (node.parent !== null) node = node.parent
    return root
  }

  setChild(child) {
    this.children 
      ? this.children.push(child) 
      : this.children = [ child ]
  }

  unsetChild(child) {
      
  }

  getChildren() {
    return this.children
      ? this.children
      : []
  }

  attach(parent) {
    if (this.parent) throw new Error('node is already attached')
    this.parent = parent
    parent.setChild(this)
  } 

  detach() {
    if (this.parent === null) throw new Error('node is already detached')
    this.parent.unsetChild(this)
    this.parent = null
  }

  upEach(func) {
    let node = this
    while (node !== null) {
      func(node)
      node = node.parent
    }
  }

  upFind(func) {
    let node = this
    while (node !== null) {
      if (func(node)) return node
      node = node.parent
    }
  }

  nodepath() {
    let q = []
    this.upEach(node => q.unshift(node))
    return q
  } 

  namepath() {
    return path.join(...this.nodepath().map(n => n.name))
  }

  walkdown(names) {
    // TODO
  }
}







