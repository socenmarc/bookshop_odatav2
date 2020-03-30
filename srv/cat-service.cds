using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;    
    @readonly entity Authors as projection on my.Authors;
    @insertonly entity Orders as projection on my.Orders;   
}

service Stats {
    @readonly entity OrderInfo as projection on my.Orders excluding {
        createdAt,
        createdBy,
        modifiedAt,
        modifiedBy,
        book,
        country
    }
}

