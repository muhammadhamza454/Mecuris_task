const myselect = async () => {


  const response = await axios.get(`http://localhost:5200/shape/`);
  response.data.dbresponse.rows.forEach(row => {
 
    var x = document.getElementById("val");
    var option = document.createElement("option");
        // Adding options
       
        option.text = row.shapeid;
        x.append(option);

  });
}
myselect();

const myFunction = async () => {
  const response = await axios.get(`http://localhost:5200/shape/`);
  response.data.dbresponse.rows.forEach(row => {
    
          //Sending the data in table
          let row1  = `<tr>
          <p><a href="#" target="_blank" style="font-size: 12px;">${row.shapename}</a></p>
                  </tr>`;
        let table = document.getElementById('myTable')
        table.innerHTML += row1

  });
}

myFunction();


const show = async () => {

  var Canvas=document.getElementById("myCanvas");

  var val = document.getElementById("val").value;
  const response = await axios.get(`http://localhost:5200/shape/`);
  response.data.dbresponse.rows.forEach(row => {


    if(val==row.shapeid && row.shapename=='square'){


      const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );

			const renderer = new THREE.WebGLRenderer({canvas: Canvas});
			renderer.setSize( 950, 620 );

      const geometry = new THREE.BoxGeometry( row.width, row.height, row.dpth );
      const material = new THREE.MeshBasicMaterial( {color: row.color} );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
			camera.position.z = 6;

			const animate = function () {
				requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				renderer.render( scene, camera );
			};

			animate();

    }



    if(val==row.shapeid  && row.shapename=='Cone'){


      const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );

			const renderer = new THREE.WebGLRenderer( {canvas: Canvas});
			renderer.setSize( 950, 620 );

      const geometry = new THREE.ConeGeometry( row.width, row.height, row.dpth );
      const material = new THREE.MeshBasicMaterial( {color: row.color} );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
			camera.position.z = 6;

			const animate = function () {
				requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				renderer.render( scene, camera );
			};

			animate();
    }

  });

}


const update = async () => {
  var val1 = document.getElementById("ucolor").value;
  var val2 = document.getElementById("uid").value;
  
  axios.get(`http://localhost:5200/update/${val1}/${val2}`);


}

const deletefun = async () => {

  var val1 = document.getElementById("did").value;
  
  axios.get(`http://localhost:5200/delete/${val1}`);


}


