const updateNew=(req,res)=>{
    let user=req.body;
    let updateDate=`update students
                    set date=${user.date},
                    where name=${user.name}`
                    pool.query(updateDate,(error,result)=>{
                        if(!error){
res.send('updated');
                        }else{
                            console.log(error.message);
                        }
                    })
                    pool.end;
}
