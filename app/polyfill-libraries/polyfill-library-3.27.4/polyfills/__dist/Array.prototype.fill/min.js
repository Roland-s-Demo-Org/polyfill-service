CreateMethodProperty(Array.prototype,"fill",function(t){for(var e=arguments[1],r=arguments[2],n=ToObject(this),o=ToLength(Get(n,"length")),a=ToInteger(e),h=a<0?Math.max(o+a,0):Math.min(a,o),i=r===undefined?o:ToInteger(r),g=i<0?Math.max(o+i,0):Math.min(i,o);h<g;){n[ToString(h)]=t,h+=1}return n});