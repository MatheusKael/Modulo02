module.exports= {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  passsword: 'docker',
  database:'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
};
