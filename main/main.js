module.exports = function main(a) {
    console.log("Debug Info");
    var top='',middle='',bottom='',b=[{t:'._.',m:'|.|',b:'|_|'},{t:'...',m:'..|',b:'..|'},{t:'._.',m:'._|',b:'|_.'},{t:'._.',m:'._|',b:'._|'},{t:'...',m:'|_|',b:'..|'},{t:'._.',m:'|_.',b:'._|'},{t:'._.',m:'|_.',b:'|_|'},{t:'._.',m:'..|',b:'..|'},{t:'._.',m:'|_|',b:'|_|'},{t:'._.',m:'|_|',b:'..|'}],c=[]
    for (let i=0;i<a.length;i++){
    	c.push(parseInt(a.charAt(i)))    }
    for (let i=0;i<a.length;i++){
    	top=top+b[c[i]].t+' '
    	middle=middle+b[c[i]].m+' '
    	bottom=bottom+b[c[i]].b+' '
    }
    top=top.trim()+'\n'
    middle=middle.trim()+'\n'
    bottom=bottom.trim()+'\n'
    // console.log(d)
    return top+middle+bottom
};
