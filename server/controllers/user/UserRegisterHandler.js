//module export
const UserRegisterHandler = (app, db) => {
  app.post("/reg/usr", async (req, res) => {
    const {
      userFName,
      userAge,
      userGender,
      userBloodGroup,
      userPhone,
      userMail,
      userPlace,
      userUserName,
      userPassword,
    } = req.body;

    try {
      // Insert into user_details
      const result = await db.run(
        `INSERT INTO user_details (userFName, userAge, userGender, userBloodGroup, userPhone, userMail, userPlace) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [userFName, userAge, userGender, userBloodGroup, userPhone, userMail, userPlace]
      );

      const user_id = result.lastID;  // Get the last inserted ID

      // Insert into user_login
      await db.run(
        `INSERT INTO user_login (user_id, userUserName, userPassword) 
        VALUES (?, ?, ?)`,
        [user_id, userUserName, userPassword]
      );

      // Insert into user_health
      await db.run(`INSERT INTO user_health (user_id) VALUES (?)`, [user_id]);

      console.log("**USER REGISTRATION SUCCESSFUL**");
      res.status(201).send({ message: "User Registration Successful!" });

    } catch (error) {
      console.error("**ERROR REGISTERING USER**", error);

      if (error.message.includes("UNIQUE constraint failed")) {
        res.status(409).send({ message: "Username or Email already exists!" });
      } else {
        res.status(500).send({ message: "Internal Server Error" });
      }
    }
  });
};



export default UserRegisterHandler;