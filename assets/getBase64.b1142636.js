function t(r){return new Promise((a,n)=>{const e=new FileReader;e.readAsDataURL(r),e.onload=()=>a(e.result),e.onerror=o=>n(o)})}export{t as g};
