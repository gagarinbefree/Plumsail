using System;
using System.Collections.Generic;
using System.Text;
using DataAcessLayer.Dto;

namespace DataAcessLayer
{
    public interface IUoW : IDisposable
    {
        IGenRepository<Order> RepOrder { get; }
    }
}
