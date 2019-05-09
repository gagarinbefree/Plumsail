using System;
using System.Collections.Generic;
using System.Text;
using LiteDB;

namespace DataAcessLayer.LiteDb
{
    public class LiteDbContext
    {
        public readonly LiteDatabase Context;
        public LiteDbContext(string path)
        {
            try
            {
                var db = new LiteDatabase(path);
                if (db != null)
                    Context = db;
            }
            catch (Exception ex)
            {
                throw new Exception("Can find or create LiteDb database.", ex);
            }
        }
    }
}
