using DataAcessLayer.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAcessLayer.LiteDb
{
    public class LiteDbRepository<T> : IGenRepository<T> where T : IEntity
    {
        private LiteDbContext _db;

        public LiteDbRepository(LiteDbContext db)
        {
            _db = db;
        }

        public int Create(T item)
        {
            var col = _db.Context.GetCollection<T>(typeof(T).Name);
            return col.Insert(item).GetBytesCount(false);
        }

        public List<T> GetAll()
        {
            var col = _db.Context.GetCollection<T>(typeof(T).Name);
            return col.FindAll().ToList();
        }
    }
}
