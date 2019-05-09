using System;
using System.Collections.Generic;
using System.Text;
using DataAcessLayer.Dto;

namespace DataAcessLayer.LiteDb
{
    class LiteDbUnit : IUoW, IDisposable
    {
        private LiteDbContext _db;

        public LiteDbUnit(LiteDbContext db)
        {
            _db = db;
        }

        private IGenRepository<Order> _repOrder;
        public IGenRepository<Order> RepOrder
        {
            get { return _repOrder ?? (_repOrder = new LiteDbRepository<Order>(_db)); }
        }

        #region IDisposable Support
        private bool _disposed = false;
        public virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _db.Context.Dispose();
                }
                _disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion
    }
}
