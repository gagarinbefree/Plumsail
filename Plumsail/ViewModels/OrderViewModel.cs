using Plumsail.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Plumsail.ViewModels
{
    public class OrderViewModel
    {
        public Guid? Id { get; set; }

        [Required]
        [NotNullOrEmpty]
        public Dictionary<string, string> Values { get; set; }
    }
}
