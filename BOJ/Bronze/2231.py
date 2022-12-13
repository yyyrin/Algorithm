# [BOJ] 2231. 분해합
# 자연수 N이 주어졌을 때, N의 가장 작은 생성자 구하기

n = int(input())
result = 0    # 분해합 계산
for i in range(1, n+1):  # 1~n까지 분해합 계산하기
    nums = list(map(int, str(i)))  # 문자열로 바꾼 후, 각 자리 분해하여 list에 저장
    # print(nums)
    result = sum(nums) + i  # 분해합 계산
    if result == n:  # input값과 계산핞 분해합이 같다면
        print(i)    # 생성자 구했다!
        break       # 생성자 구했으므로 break
    if i == n:      # 생성자가 없는 경우
        print(0)
# --------------------------------
# n = len(number)
# start = int(number) - 9 * n
# ans = 0
# while start < int(number):
#     num_list = []
#
#     for i in range(n-1, 0, -1):
#         num_list.append(start // i)

# => 1부터 계산하는 것은 효율성이 떨어진다고 판단했다.
# => 최소로 검사를 시작할 값을 구하는 방식을 생각헀다.
# => 주어진 숫자가 534이라면, 생성자는 534-(9+9+9) 보다 항상 크거나 같을 것이다.
# => 하지만 계산하는 과정에서 막혀서 찾아보고 코드를 다시 작성했다.