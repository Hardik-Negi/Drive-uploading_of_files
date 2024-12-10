const express=require("express");
const authMiddleware=require('../middlewares/authe')

const router=express.Router();
const upload=require('../config/multer.config')
const fileModel=require('../models/files.models')


router.get('/home',authMiddleware, async (req,res)=>{

   const userFiles=await fileModel.find({
      user: req.user.userId
   })



   res.render('home',{
      files:userFiles
   });
})

router.post('/upload',authMiddleware, upload.single('file'),async (req,res)=>{
  const newFile=await fileModel.create({
   path:req.file.path,
   originalname:req.file.originalname,
   user:req.user.userId
  })
 res.json(newFile)

})

router.get('/download/:path',authMiddleware,async(req,res)=>{
   const loggedUserId=req.user.userId;
   const path=req.params.path;

   const file=await fileModel.findOne({
      user:loggedUserId,
      path:path
   })

   if(!file){
      return res.status(401).json({
         message:'Unauthorized'
      })
   }
})

module.exports = router;