
bài1
class PhanSo {
    constructor(t,m){
        this.t = t
        this.m = m
    }
add(phanso) {
    return new PhanSo(this.t*phanso.m + phanso.t*this.m,this.m*phanso.m)
}

mul() {
    return new PhanSo(this.t*phanso.m - phanso.t*this.m,this.m*phanso.m)
}

sub() {
    return new PhanSo(this.t*phanso.t,this.m*phanso.m)
}

div() {
    return new PhanSo(this.t*phanso.m,this.m*phanso.t)
}

show() {
    console.log($(this.t)/$(this.m))
}

}
    
    
    ____________________________
Bài2
const a = prompt("nhập số thí sinh: ")
class Candidate {
    constructor(id,name,dob,math,literature,english){
        this.id = id
        this.name = name
        this.dob = dob
        this.math = math
        this.literature = literature
        this.english = english
    }
}

const hs = []
for ( let i = 0; i <= Number(a); i++) {
    const student = new Candidate(prompt("id: "),prompt("name: "),prompt("dob: "),prompt("math: "),prompt("literature: "),prompt("english: "));
    hs.push(student);
}
class TestCandidate {
    run() {
      for (let j = 0; j < hs.length; j++) {
        if (
          Number(hs[j].math) +
            Number(hs[j].literature) +
            Number(hs[j].english) >
          15
        ) {
          console.log(hs[j]);
        }
      }
    }
  }
  let test = new TestCandidate();
  test.run();