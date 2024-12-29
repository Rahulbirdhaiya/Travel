import Tour from '../models/Tour.js';


//create new tour
export const createTour = async (req,res)=>{
    const newTour = new Tour(req.body);

    try{
        const savedTour = await newTour.save();

        res.status(200).json({
            success:true,
            message:'Successfully created',
            data:savedTour,
        });

    }catch(err){
        res.status(500).json({success:false,message:'Failed to create. Try again'});
    }
};

//update tour
export const updateTour = async(req,res)=>{
   
    const id = req.params.id
   
    try {

        const updatedTour = await Tour.findByIdAndUpdate(id,{
          $set: req.body  
        },{new:true})

        res.status(200).json({
            success:true,
            message:'Successfully updated',
            data:updatedTour,
        });
        
    } catch (err) {
        res.status(500).json({
            success:false,
            message:'Failed to update',
        });
    }
}

//delete tour
export const deleteTour = async(req,res)=>{
    const id = req.params.id
   
    try {

        await Tour.findByIdAndDelete(id)

        res.status(200).json({
            success:true,
            message:'Successfully deleted',
           
        });
        
    } catch (err) {
        res.status(500).json({
            success:false,
            message:'Failed to delete',
        });
    }
}

//getSingle tour
export const getSingleTour = async(req,res)=>{
    const id = req.params.id
   
    try {

        const tour = await Tour.findById(id).populate('reviews')

        res.status(200).json({
            success:true,
            message:'Successfully find',
            data:tour
        });
        
    } catch (err) {
        res.status(404).json({
            success:false,
            message:'not found',
        });
    }
}

// get all tours with pagination
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 8;

  try {
    const tours = await Tour.find({})
      .populate('reviews')
      .skip(page * limit)
      .limit(limit);

    const totalTours = await Tour.countDocuments();

    res.status(200).json({
      success: true,
      message: 'Successfully fetched all tours',
      data: tours,
      totalTours,
      totalPages: Math.ceil(totalTours / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch tours' });
  }
};

// get tour by search
export const getTourBySearch = async (req, res) => {
  const { city, distance, maxGroupSize } = req.query;

  try {
    const tours = await Tour.find({
      city: new RegExp(city, 'i'),
      distance: { $gte: parseInt(distance) },
      maxGroupSize: { $gte: parseInt(maxGroupSize) }
    }).populate('reviews');

    res.status(200).json({
      success: true,
      message: 'Successfully fetched tours',
      data: tours
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch tours' });
  }
};

//get featured tour
export const getFeaturedTour = async(req,res)=>{


    try {
        
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8)

        res.status(200).json({
            success:true,
            message:'Successfully find all',
            data:tours
        })

    } catch (err) {
        res.status(404).json({
            success:false,
            message:'no data found',
        });

    }
    
    }

    //get tour counts
    export const getTourCount = async(req,res)=>{
        try {
            const tourCount = await Tour.estimatedDocumentCount()

    
            res.status(200).json({success:true, data:tourCount});
        } catch (err) {
            res.status(200).json({success:true, message:"failed to featch"}) 
        }
    }