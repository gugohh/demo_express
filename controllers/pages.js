const pages = {
home:(req, res) => {
    let msj = "ES  un mensaje desde Pug"
    let title="Home"
    res.status(200).render("template",{msj,title});
    }
    ,about:(req ,res)=>{
        let msj = "ES  about  desde Pug"
        let title="about"
        res.status(200).render("template",{msj,title});
    }
    ,contact:(req ,res)=>{
        res.status(200).send('Esto es contact')
    }
    ,location:(req ,res)=>{
        res.status(200).send('Esto es location')
    }
    ,pictures:(req ,res)=>{
        console.log(req.params);
        let msj = "Esto es un pictrure"
         msj += req.params.id?
            '. ID:'+ req.params.id
            : ""
        let id = req.params.id    
        res.status(200).render('pictures',{msj, id});
    }
    
    
    ,notFound:(req ,res)=>{
        res.status(404).send('404 Not Found!!!')
    }
}
module.exports = pages