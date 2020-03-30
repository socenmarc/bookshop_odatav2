module.exports = srv => {

    console.log('Service name:', srv.name)
  
    if (srv.name === 'CatalogService') {

      srv.after ('READ', 'Books', xs => {
  
        // CHOOSE ONLY ONE OF THESE ...
        // AND LET US KNOW YOUR PREFERENCE AND WHY! :-)
  
        // option 1 start
        xs.map(x => x.stock > 500 && (x.title = `(5% off!) ${x.title}`))
        // option 1 end
  
        // option 2 start
/*         let newBooks = [];
        xs.forEach(x => {
          if (x.stock > 500) {
            x.title = '(10% off!) ' + x.title
          }
          newBooks.push(x)
        })
        return newBooks */
        // option 2 end
  
      })
  
    }
  }