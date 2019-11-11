def opposite(num)
 #your code here
 if num.positive?
   return -(num).abs
  elsif num.negative?
    return (num).abs
  else
    return 0
  end
end
