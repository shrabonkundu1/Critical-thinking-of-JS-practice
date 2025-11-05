const currentRoles = ["user", "editor"];
const featuresRoles = ["admin","manager"];

const canAccess = currentRoles.some((role) => 
    featuresRoles.includes(role)
);

console.log("cross cheak currentRoles===featureRoles:",canAccess)



// Array.form diye randomly array er moddhe data ana :

const range = (start, stop, step) => 
    Array.from(
        {length: Math.ceil((stop-start)/step)},
        (_, i) => start + i * step
    );

    console.log(range(0, 11, 1))     //Output ---------[0, 1, 2, 3, 4,5, 6, 7, 8, 9,10]