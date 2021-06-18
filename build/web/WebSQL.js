var db = openDatabase('mydb', '1.0', 'ECOMM DB', 2 * 1024 * 1024); 

 db.transaction(function (tx) {   
    tx.executeSql('CREATE TABLE IF NOT EXISTS REGISTERUSER ("NAME" VARCHAR2(4000), "PASS" VARCHAR2(4000), "EMAIL" VARCHAR2(4000))'); 
 });

 