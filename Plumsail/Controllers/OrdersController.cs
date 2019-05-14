using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAcessLayer;
using DataAcessLayer.Dto;
using Mapster;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Plumsail.ViewModels;

namespace Plumsail.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private IUoW _unit;

        public OrdersController(IUoW unit)
        {
            _unit = unit;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                List<Order> orders = _unit.RepOrder.GetAll();

                return Ok(orders);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Dictionary<string, string> model)
        {
            try
            {
                if (model == null || !model.Any())
                    throw new Exception("Request body is not valid");

                Order order = new Order();
                order.Values = model;

                _unit.RepOrder.Create(order);

                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}