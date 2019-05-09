using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcessLayer
{
    public interface IGenRepository<T>
    {
        List<T> GetAll();
        void Create(T item);
    }
}
