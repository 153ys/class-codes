//從一個網路API抓資料

// const url = "https://jsonplaceholder.typicode.com/users"


// fetch(url).then((resp) => {
//   console.log(resp)
// })

// fetch(url)
//   .then((resp) => {
//     return resp.json()
//   })
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user.email)
//     })
//   })

  const url = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

  fetch(url)
    .then((resp) => {
    return resp.json()
  })
    .then((stations) => {
      const s1 = stations.filter((station) => {
        return station.sarea == "中山區"
      })
        .filter((station) => {
          return station.available_rent_bikes >= 10
        })
        .filter((station) => {
          return station.ar.includes("民權西路")
        })
        .forEach((station) => {
          const address = station.ar
          const bikes = station.available_rent_bikes
          console.log(`(${bikes} ${address})`)
        });

      // stations.forEach((station) => {
      //   const stationName = station.sna.replace("YouBike2.0_","")
      //   console.log(stationName)
      // })
    })

    console.log(s1.length)

    .catch((err) => {
      console.log(err)
    })

