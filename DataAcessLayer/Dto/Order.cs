using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcessLayer.Dto
{
    public class Order : IEntity
    {
        public Dictionary<string, string> Values { get; set; } = new Dictionary<string, string>();
    }
}
