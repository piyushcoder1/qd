const updateNew=(req,res)=>{
    let user=req.body;
    let updateDate=`update students
                    set roll_number='${user.roll_number}'
                    where id=${user.id}`
                    pool.query(updateDate,(error,result)=>{
                        if(!error){
res.send('updated');
                        }else{
                            console.log(error.message);
                        }
                    })
                    pool.end;
}
