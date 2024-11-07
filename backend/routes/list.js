const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");


//Create
// router.post("/addTask", async (req, res) => {
//     try {
//         const { title, body, id } = req.body;
//         const existingUser = await User.findById(id)
//         if (existingUser) {
//             const list = new List({ title, body, user: existingUser });
//             await list.save().then(() => res.status(200).json({ list }));
//             existingUser.list.push(list);
//             existingUser.save();
//         }
//     } catch (error) {
//         console.log(error);

//     }
// });

//Create chatgpt
router.post("/addTask", async (req, res) => {
    try {
        const { title, body, id } = req.body;

        // Check if the user exists
        const existingUser = await User.findById(id);
        if (existingUser) {
            // Create a new list item, only passing the ObjectId of the user
            const list = new List({
                title,
                body,
                user: existingUser._id, // Use _id, which is the ObjectId field
            });
            await list.save();

            // Optionally, you can add the list item to the user's list
            existingUser.list.push(list);
            await existingUser.save();

            // Return success response
            res.status(200).json({ list });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});


//Update

// router.put("/updateTask/:id", async (req, res) => {
//     try {
//         const { title, body, email } = req.body;
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             const list = await List.findByIdAndUpdate(req.params.id, { title, body })
//             list.save().then(() => res.status(200).json({ message: "Task Updated" }));
//         }
//     } catch (error) {
//         console.log(error);

//     }
// });

//update chatgpt
// Update Task
router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;

        // Find user by email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Find and update the list task
            const list = await List.findById(req.params.id);
            if (!list) {
                return res.status(404).json({ message: "Task not found" });
            }

            // Only update the fields that are provided
            list.title = title || list.title;
            list.body = body || list.body;

            await list.save();
            res.status(200).json({ message: "Task Updated", list });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});

//Delete

router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const { id } = req.body;
        const existingUser = await User.findByIdAndUpdate(id,
            { $pull: { list: req.params.id } });
        if (existingUser) {
            await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({ message: "Task Deleted" }));
        }
    } catch (error) {
        console.log(error);

    }
});

//Get Tasks

// router.get("/getTasks/:id", async (req, res) => {
//     const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
//     if (list.length !== 0) {
//         res.status(200).json({ list: list });
//     } else {
//         res.status(200).json({message: "No Tasks"});
//     }
// })

//gettask chatgpt

// Get Tasks
router.get("/getTasks/:id", async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });

        if (list.length !== 0) {
            res.status(200).json({ list });
        } else {
            res.status(200).json({ message: "No Tasks" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
