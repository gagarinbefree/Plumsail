using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcessLayer.Dto
{
    public interface IEntity
    {
        Guid Id { get; set; }
    }
}
