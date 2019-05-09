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
    public class OrderController : ControllerBase
    {
        private IUoW _unit;

        public OrderController(IUoW unit)
        {
            _unit = unit;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_unit.RepOrder.GetAll().Adapt<OrderViewModel[]>());
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] OrderViewModel model)
        {
            try
            {
                _unit.RepOrder.Create(model.Adapt<Order>());

                return Ok();

            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
