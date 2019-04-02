
friends = {
  Kate : {
    spouse: 'Mike',
    children: ['Sara', 'Sam'],
    job: 'developer',
  },
  Tom: {},
  Din: {},
  Anna: {},
  Luke: {},
  merriageRegistration(name, spouseName) { return this[name].spouse = spouseName },
  divorseRegistration(name) { return delete this[name].spouse },
  bornChild(child, [children]) {  return this.children = children },
  employed(name, job) { return this[name].job = job },
  dismissal(name, job) { return delete this[name].job },
  getMerriage(friends) { 
    const merriage = [];

    for(let key in friends) {
      if(friends[key].spouse) merriage.push(friends[key]);
    }
    return merriage;
  },
  getChildren(obj) { 
    const children = [];
    
    for(let key in obj) {
      if(obj[key].children) children.push(obj[key]);
    }
    return children;
  },
  getEmployed(obj) { 
    let isEmployed = [];

    for(let key in obj) {
      if(obj[key].job) isEmployed.push(obj[key]);
    }
    return isEmployed;
  },

}; 