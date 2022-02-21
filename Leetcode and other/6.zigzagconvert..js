
// Javascript Program for above approach

// Function for zig-zag Concatenation
function zigZagConcat(s,n)
{

	// Check is n is less
		// or equal to 1
		if (n <= 1)
		{
			return s;
		}

		let result = [];

		// Iterate rowNum from 0 to n - 1
		for (let rowNum = 0; rowNum < n; rowNum++)
		{
			let i = rowNum;
			let up = true;
			
			// Iterate i till s.length() - 1
			while (i < s.length)
			{

				result.push(s[i]);
				
				// Check is rowNum is 0 or n - 1
				if (rowNum == 0 || rowNum == n - 1)
				{
					i += (2 * n - 2);
				}
				else
				{
					if (up)
					{
						i += (2 * (n - rowNum) - 2);
					}
					else
					{
						i += rowNum * 2;
					}
					up ^= true;
				}
			}
		}
		return result.join("");
}

// Driver Code
let str = "PAYPALISHIRING";
let n = 3;
console.log(zigZagConcat(str, n));

// This code is contributed by unknown2108

