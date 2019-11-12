class Animal {

    constructor (name, color) {
      this.name = name;
      this.color = color;
    }
  
    running() {
      console.log(this.name + '会跑步')
    }
  
  };
  
  
  let tiger = new Animal('老虎', '黑黄');
  
  tiger.running();