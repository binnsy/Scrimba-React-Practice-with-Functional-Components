import React from 'react'
// import ReactDOM from 'react-dom'
import Footer from './../Footer/Footer.js'
import ToDo from './../ToDo/ToDo.js'
import Header from './../Header/Header.js'
import ContactCard from './../ContactCard/ContactCard.js'
import Joke from './../Joke/Joke.js'
import jokesData from './../Joke/jokesData.js'
import Product from './../Product/Product.js'
import productsData from './../Product/productData.js'
import toDosData from './../ToDo/toDosData.js'
// import ToDo from './../ToDo/ToDo.js'

function App() {

  const toDoComponents = toDosData.map(toDo => {
    return (
      <div>
        <ToDo key={toDo.id} list={toDo} />
      </div>
    )
  })

  const productComponents = productsData.map(item => {
    return (
      <div>
      <Product key={item.id} product={item}/>
      </div>
    )
  })

  // return (
  //   <div>
  //   {productComponents}
  //   </div>
  // )

  const jokeComponents = jokesData.map(joke => {
    return (
      <div>
      <Joke key={joke.id} question={joke.question}
      punchLine={joke.punchLine} />
      <br />
      </div>
  )
})

  return (
    <div>
      {jokeComponents}
      {productComponents}
      {toDoComponents}
    </div>
  )
}

    // <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    // <Header />
    // <ToDo />
    // <ToDo />
    // <ContactCard
    //   contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
    // />
    // <ContactCard
    //   contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
    //      />
    // <Joke
    //   question= "Why did the duck cross the road?"
    //   punchLine= "To get to the other side"
    //   />
    //   <Joke
    //     question= ""
    //     punchLine= "That's what she said"
    //     />
    //   <Footer />
    // </div>
  // )
// }
// )
// }


export default App
