class cpClassList {
  constructor(el) {
    if (document.body.contains(el))
      this.el = el;
    else
      throw new Error("Node Expected");
  }

  add(...classes) {
    const lists = this.getList();
    for (let x = 0; x < classes.length; x++) {
      if (lists.indexOf(classes[x]) < 0) {
        lists.push(classes[x]);
      }
    }
    this.el.className = lists.toString().replace(/,/g, " ");
    return this;
  }
  remove(...classes) {
    const lists = this.getList();
    for (let x = 0; x < classes.length; x++) {
      if (lists.indexOf(classes[x]) >= 0) {
        lists.splice(lists.indexOf(classes[x]), 1);
      }
    }
    this.el.className = lists.toString().replace(/,/g, " ");
    return this;
  }

  toggle(className) {
    const lists = this.getList();
    if (lists.indexOf(className) >= 0)
      this.remove(className);
    else
      this.add(className);
    return this;
  }

  item(index) {
    if (typeof index === "number") {
      const lists = this.getList();
      return lists[index] || false;
    } else
      throw new Error("Index should be an integer");
  }

  contains(className) {
    const lists = this.getList();
    if (lists.indexOf(className) >= 0) return true;
    else return false;
  }


  replace(oldClassName, newClassName) {
    const lists = this.getList();
    if (lists.indexOf(oldClassName) >= 0) {
      lists[lists.indexOf(oldClassName)] = newClassName;
      this.el.className = lists.toString().replace(/,/g, " ");
      return this;
    } else
      return false;
  }
  getList() {
    const classNames = this.el.className;
    return classNames.split(/\s+/g);
  }
}

function classList(el) {
  return new cpClassList(el);
}
if (window) {
  window.cpClassList = classList;
}

module.exports = classList;