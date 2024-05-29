function createFunction(id,name)
{
    return {
        id:id,
        name:name,
        language:function(){
            console.log("Scripting language");
        }
    }
}


const JavaScript = createFunction(0,"Javascript"); //creates a function based on the arguements
JavaScript.language();