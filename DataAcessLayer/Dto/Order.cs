using LiteDB;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcessLayer.Dto
{
    public class Order : IEntity
    {
        [BsonId]
        public Guid Id { get; set; }
        public List<OrderItem> Values { get; set; } = new List<OrderItem>();
    }

    public class OrderItem
    {
        public string Key { get; set; }
        public string Value { get; set; }
        public string Description { get; set; }
    }
}
